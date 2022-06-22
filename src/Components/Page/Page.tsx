//Interfaces
interface PageProps {
    content: string
    setContent: (content: string) => void
}

const Page = (props: PageProps) =>
    <main>
        <input type="textarea" name="content" id="content"/>
    </main>

export default Page;