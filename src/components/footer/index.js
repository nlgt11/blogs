import Container from 'components/container';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-14 items-center">
          <h3 className="text-2xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Made with ❤️ and a lot of ☕️
          </h3>
        </div>
      </Container>
    </footer>
  );
}
