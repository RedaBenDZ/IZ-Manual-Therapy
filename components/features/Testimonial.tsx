import Card from "../ui/Card";

interface TestimonialProps {
  quote: string;
  name: string;
  context?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, context }) => (
  <Card>
    <p className="text-lg italic">“{quote}”</p>
    <p className="mt-4 font-semibold">{name}</p>
    {context && <p className="text-sm text-foreground/70">{context}</p>}
  </Card>
);

export default Testimonial;
