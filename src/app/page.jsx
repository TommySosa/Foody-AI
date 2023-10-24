import Button from "./components/Button";
import Input from './components/Input';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      HOME
      <Button text="Hola" />
      <Input placeholder="Ejemplo"/>
    </main>
  )
}
