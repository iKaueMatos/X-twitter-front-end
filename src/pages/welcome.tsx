import { DefaultSeo } from "next-seo";
import SEO from '../../next-seo.config';
import { Container } from "@mui/material";

export default function Welcome() {
    return (
        <>
            <DefaultSeo title="Seja Bem vindo ao twitter!" {...SEO} />
            <Container>
                <h1>Seja bem vindo ao twitter</h1>
            </Container>
        </>
    )
}