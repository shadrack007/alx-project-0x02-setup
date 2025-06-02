import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About: React.FC = () => {
  return (
    <section>
      <Header />

      <div className="flex flex-col items-center justify-center gap-2">
        <h1>small button</h1>
        <Button size="small" shape="rounded-sm" />
        <h1>Medium Button</h1>
        <Button size="medium" shape="rounded-md" />
        <h3>Large Button</h3>
        <Button size="large" shape="rounded-full" />
      </div>
    </section>
  );
};

export default About;
