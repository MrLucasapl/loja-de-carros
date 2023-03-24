import { HeaderStyle } from "./style";

const Header = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <HeaderStyle>
      <div className="box-line" onClick={closeMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
