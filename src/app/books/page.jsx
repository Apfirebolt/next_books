"use server"

import Books from "@/components/books";

async function AboutPage() {
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Books />
    </div>
  );
}

export default AboutPage;
