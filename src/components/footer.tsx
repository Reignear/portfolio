interface FooterProps {
  className?: string;
}
const Footer = ({ className }: FooterProps) => {
  return (
    <div className={`${className}`}>
      <p>© 2023 My Portfolio. All rights reserved.</p>
    </div>
  );
};

export default Footer;
