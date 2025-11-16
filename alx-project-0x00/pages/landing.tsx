import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC = () => {
   return (
      <div>
         <h1 className=" text-xl font-extralight">Landing Page</h1>
         <Card />
         <Button title="Click me" styles="rounded-lg" />
         <Button title="Click me" styles="rounded-sm" />
         <Button title="Click me" styles="rounded-md" />
      </div>
   )
}
export default Landing