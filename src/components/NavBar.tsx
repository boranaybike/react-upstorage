import { NavLink } from "react-router-dom";
import {Container, Menu,Image} from "semantic-ui-react";
import { AccountGetAllDto } from "../types/AccountTypes";

export type NavBarProps = {
    accounts:AccountGetAllDto[]
}

const NavBar = ({accounts}: NavBarProps) => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as='a' header>
                    <Image size='mini' src='/vite.svg' style={{ marginRight: '1.5em' }} />
                    UpStorage
                </Menu.Item>
                <Menu.Item as={NavLink} to="/">Home</Menu.Item>
                <Menu.Item as={NavLink} to="/accounts">Accounts({accounts.length})</Menu.Item>
                <Menu.Item as={NavLink} to="/gfklgj">Not Found</Menu.Item>

            </Container>
        </Menu>
    );
}

export default  NavBar;