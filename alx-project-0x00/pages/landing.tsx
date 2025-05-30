import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <main className="min-h-screen flex flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Landing Page</h1>

        <div className="flex flex-col gap-4">
          {/* Small Buttons */}
          <div className="flex gap-3">
            <Button title="Small Rounded-sm" styles="text-sm rounded-sm" />
            <Button title="Small Rounded-md" styles="text-sm rounded-md" />
            <Button title="Small Rounded-lg" styles="text-sm rounded-lg" />
            <Button title="Small Rounded-full" styles="text-sm rounded-full" />
          </div>

          {/* Medium Buttons */}
          <div className="flex gap-3">
            <Button title="Medium Rounded-sm" styles="text-base rounded-sm" />
            <Button title="Medium Rounded-md" styles="text-base rounded-md" />
            <Button title="Medium Rounded-lg" styles="text-base rounded-lg" />
            <Button
              title="Medium Rounded-full"
              styles="text-base rounded-full"
            />
          </div>

          {/* Large Buttons */}
          <div className="flex gap-3">
            <Button
              title="Large Rounded-sm"
              styles="text-lg rounded-sm px-6 py-3"
            />
            <Button
              title="Large Rounded-md"
              styles="text-lg rounded-md px-6 py-3"
            />
            <Button
              title="Large Rounded-lg"
              styles="text-lg rounded-lg px-6 py-3"
            />
            <Button
              title="Large Rounded-full"
              styles="text-lg rounded-full px-6 py-3"
            />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Landing;
