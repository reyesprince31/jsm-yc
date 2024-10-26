import books from "../db";

export async function GET() {
    return Response.json(books);
}

export async function POST(request: Request) {
    const body = await request.json();
    books.push(body);

    return Response.json({ message: "Book added successfully" });
}