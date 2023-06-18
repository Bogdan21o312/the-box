import {NextResponse} from "next/server";

const posts = [
    {
        title: "1"
    },
    {
        title: "2"
    },
    {
        title: "3"
    },
    {
        title: "4"
    },
    {
        title: "5"
    }
]

export async function GET(req: Request) {
    return NextResponse.json(posts)
}

export async function POST(req: Request) {
    const body = await req.json()

    return NextResponse.json({body})
}
