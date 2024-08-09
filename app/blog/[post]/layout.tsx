import { title } from "process";
import { Metadata } from "next";

const BlogLayOut: React.FC<any> = ({ children }) => {
    return children;

}


export default BlogLayOut;

interface Params {
    post: string;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const title = params.post.split('-').join(" ");
    return {
        title,
    };
}