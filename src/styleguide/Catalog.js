import React from 'react';
import { withStyles } from '@material-ui/core';
import cn from 'classnames';
import Typography from "@material-ui/core/Typography/Typography";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import UserCard from "../components/UserCard";

const styles = ({ theme }) => ({
    root: {
        display: 'flex',
    },
    fullHeight: {
        height: '100vh'
    }
});

function Section({title, children}) {
    return <div>
        <h1 style={{color: '#FFF', backgroundColor: '#000', padding: '0.5rem 1rem'}}>{title}</h1>
        <div>
            { children }
        </div>
    </div>
}

function Catalog({ children, classes, className = '', fullWidth = false, fullHeight = false }) {
    return (
        <div style={{margin: '3rem'}}
        >
            <Section title="Navbar">
                <Navbar title="Section Name" />
            </Section>
            <Section title="User Card">
                <UserCard
                    image="https://via.placeholder.com/150"
                    firstName="Pierre-Luc"
                    lastName="Tremblay"
                />
            </Section>
            <Section title="Product Card">
                <ProductCard
                    title="Awful product"
                    description="You can go on the moon maybe out of space"
                    image="https://via.placeholder.com/150"
                    quantity={32}
                    price={2.45}
                />
                <ProductCard
                    title="Awesome product"
                    description="You can go on the moon maybe out of space"
                    image="https://via.placeholder.com/150"
                    quantity={0}
                    price={1}
                />
            </Section>
            <Section title="Typography">
                {/*<Typography component="h2" variant="display4" gutterBottom>*/}
                    {/*Display 4*/}
                {/*</Typography>*/}
                {/*<Typography component="h2" variant="display3" gutterBottom>*/}
                    {/*Display 3*/}
                {/*</Typography>*/}
                {/*<Typography component="h2" variant="display2" gutterBottom>*/}
                    {/*Display 2*/}
                {/*</Typography>*/}
                {/*<Typography component="h2" variant="display1" gutterBottom>*/}
                    {/*Display 1*/}
                {/*</Typography>*/}
                <Typography component="h2" variant="headline" gutterBottom>
                    Headline
                </Typography>
                <Typography variant="title" gutterBottom>
                    Title
                </Typography>
                <Typography variant="subheading" gutterBottom>
                    Subheading
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Body 2
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Body 1
                </Typography>
                <Typography variant="caption" gutterBottom>
                    Caption
                </Typography>
                <Typography gutterBottom noWrap>
                    {`
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        `}
                </Typography>
                <Typography variant="button" gutterBottom>
                    Button
                </Typography>
            </Section>
        </div>
    );
}

export default withStyles(styles)(Catalog);
