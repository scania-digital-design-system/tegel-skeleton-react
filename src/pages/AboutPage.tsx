import { TdsLink } from "@scania/tegel-react";

const AboutPage = () => {
    return (
        <>
            <h1 className="tds-headline-01 tds-u-mb-2">Tegel</h1>
            <p className="tds-body-01">
                This is a skeleton project build using{" "}
                <TdsLink>
                    <a href="https://npmjs.com/package/@scania/tegel-react">
                        @scania/tegel-react
                    </a>
                    . It also includes a basic setup of{" "}
                    <TdsLink>
                        <a href="https://reactrouter.com">React Router</a>
                    </TdsLink>
                </TdsLink>
            </p>
        </>
    );
};

export default AboutPage;
