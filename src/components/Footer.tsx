type FooterProps = {
  year: number;
  author: string;
};

function Footer({ year, author }: FooterProps) {
  return (
    <footer className="footer">
      <p>&copy; {year} {author}</p>
    </footer>
  );
}

export default Footer;