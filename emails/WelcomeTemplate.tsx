import { Html, Body, Container, Text,
     Link, Preview, Tailwind } from "@react-email/components";

interface WelcomeTemplateProps {
    name: string
}

const WelcomeTemplate = ({ name }: WelcomeTemplateProps) => {
    return (
        <Html>
            <Preview>Welcome Top G</Preview>
            <Tailwind>
            <Body className="bg-white">
                <Container>
                    <Text className="text-xl font-bold">Hello {name}</Text>
                    <Link href="https://codewithmosh.com">www.codewithmosh.com</Link>
                </Container>
            </Body>
                </Tailwind>
        </Html>
    );
}

export default WelcomeTemplate;