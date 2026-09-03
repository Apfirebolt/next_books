FROM node:23-alpine as builder

# Set environment variables for Next.js
ENV NODE_ENV production
# Next.js production server runs on port 3000 by default
ENV PORT 3000

# Set the working directory
WORKDIR /app

COPY --from=builder /app/.next ./.next

COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/public ./public

COPY package.json ./

# Expose the application port
EXPOSE 3000

# Start the Next.js production server using the 'start' script
CMD ["npm", "run", "start"]
