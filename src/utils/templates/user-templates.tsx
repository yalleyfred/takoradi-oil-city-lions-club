import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface UserConfirmationEmailProps {
  firstName: string;
  referenceNumber?: string;
}

export const UserConfirmationEmail = ({
  firstName,
  referenceNumber = `TOCLC-${Date.now().toString().slice(-8)}`,
}: UserConfirmationEmailProps) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className="bg-[#f6f9fc] font-sans">
        <Preview>Thank you for contacting Takoradi Oil City Lions Club</Preview>
        <Container className="bg-white mx-auto py-5 pb-12 mb-16">
          <Section className="px-12">
            <Text className="text-blue-600 text-sm font-bold m-0">
              Takoradi Oil City Lions Club
            </Text>
            <Hr className="border-[#e6ebf1] my-5" />
            <Text className="text-[#525f7f] text-base leading-6 text-left">
              Dear {firstName},
            </Text>
            <Text className="text-[#525f7f] text-base leading-6 text-left">
              Thank you for contacting the Takoradi Oil City Lions Club. We have
              successfully received your message and appreciate you taking the
              time to reach out to us.
            </Text>
            <Section className="bg-[#f6f9fc] rounded-[3px] p-4 my-5 text-center">
              <Text className="text-[#8898aa] text-xs uppercase tracking-wide font-semibold m-0 mb-2">
                Reference Number
              </Text>
              <Text className="text-[#525f7f] text-xl font-bold m-0 mb-2 tracking-wide">
                {referenceNumber}
              </Text>
            </Section>
            <Text className="text-[#525f7f] text-base leading-6 text-left">
              A member of our management team will review your inquiry and
              contact you within 24-48 business hours.
            </Text>
            <Text className="text-[#525f7f] text-base leading-6 text-left">
              In the meantime, you can learn more about our community service
              initiatives and how we're making a difference in our{" "}
              <Link className="text-blue-600" href={"#"}>
                community
              </Link>
              .
            </Text>
            <Text className="text-[#525f7f] text-base leading-6 text-left">
              <strong>What happens next:</strong>
            </Text>
            <Text className="text-[#525f7f] text-base leading-6 text-left ml-5">
              • Our team will review your message
              <br />
              • We'll prepare a personalized response
              <br />• You'll receive a reply within 24-48 business hours
            </Text>
            <Hr className="border-[#e6ebf1] my-5" />
            <Text className="text-[#525f7f] text-base leading-6 text-left">
              If your matter is urgent or you need immediate assistance, please
              reply to this email with "URGENT" in the subject line, and we'll
              prioritize your request.
            </Text>
            <Text className="text-[#525f7f] text-base leading-6 text-left">
              You can also find more information about our programs and services
              on our{" "}
              <Link className="text-blue-600" href={"#"}>
                website
              </Link>
              .
            </Text>
            <Text className="text-[#525f7f] text-base leading-6 text-left">
              We look forward to connecting with you soon.
            </Text>
            <Text className="text-[#525f7f] text-base leading-6 text-left">
              Warm regards,
              <br />
              <strong>Management Team</strong>
              <br />
              Takoradi Oil City Lions Club
            </Text>
            <Hr className="border-[#e6ebf1] my-5" />
            <Text className="text-stone-400 text-center text-xs leading-4">
              Takoradi Oil City Lions Club | Serving our community with pride
              and purpose
            </Text>
            <Text className="text-stone-400 text-center text-xs leading-4 mt-2">
              © {new Date().getFullYear()} Takoradi Oil City Lions Club. All
              rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default UserConfirmationEmail;
