import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <section>
      <Header />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <Card title="card 1" content="Card 1 content goes here" />

        <Card title="card 2" content="Card 3 content goes here" />

        <Card title="card 3" content="Card 3 content goes here" />
      </div>
    </section>
  );
};

export default Home;
