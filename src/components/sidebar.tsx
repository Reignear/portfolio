interface SidebarProps {
  className?: string;
}
const Sidebar = ({ className }: SidebarProps) => {
  return <div className={`${className}`}>Sidebar</div>;
};

export default Sidebar;
