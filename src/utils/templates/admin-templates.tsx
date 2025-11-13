import {
  Body,
  Button,
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

interface AdminEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  submittedAt?: string;
}

export const AdminNotificationEmail = ({
  firstName,
  lastName,
  email,
  phone,
  message,
  submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }),
}: AdminEmailProps) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className="bg-[#f6f9fc] font-sans">
        <Preview>
          New contact inquiry from {firstName} {lastName}
        </Preview>
        <Container className="bg-white mx-auto py-5 pb-12 mb-16">
          <Section className="px-12">
            {/* Replace with your logo */}
            <Text className="text-blue-600 text-sm font-bold m-0">
              Takoradi Oil City Lions Club
            </Text>
            {/* Or use an image logo:
            <Img
              src={`${baseUrl}/static/lions-club-logo.png`}
              width="150"
              height="50"
              alt="Takoradi Oil City Lions Club"
            />
            */}

            <Hr className="border-[#e6ebf1] my-5" />

            <Text className="text-[#525f7f] text-base leading-6 text-left">
              A new contact form submission has been received through your
              website. Please review the details below and respond accordingly.
            </Text>

            {/* Submission Time */}
            <Section className="bg-[#f6f9fc] rounded-[3px] p-4 my-5">
              <Text className="text-[#8898aa] text-xs uppercase tracking-wide font-semibold m-0 mb-1">
                Submitted
              </Text>
              <Text className="text-[#525f7f] text-sm font-medium m-0">
                {submittedAt}
              </Text>
            </Section>

            {/* Contact Information */}
            <Text className="text-[#525f7f] text-sm uppercase tracking-wide font-semibold m-0 mt-6 mb-3">
              Contact Information
            </Text>

            <Section className="bg-[#f6f9fc] rounded-[3px] p-4 mb-3">
              <table width="100%" cellPadding="0" cellSpacing="0">
                <tr>
                  <td width="50%" style={{ paddingRight: "8px" }}>
                    <Text className="text-[#8898aa] text-xs uppercase tracking-wide font-semibold m-0 mb-1">
                      Full Name
                    </Text>
                    <Text className="text-[#525f7f] text-sm font-medium m-0">
                      {firstName} {lastName}
                    </Text>
                  </td>
                  <td width="50%" style={{ paddingLeft: "8px" }}>
                    <Text className="text-[#8898aa] text-xs uppercase tracking-wide font-semibold m-0 mb-1">
                      Email Address
                    </Text>
                    <Link
                      href={`mailto:${email}`}
                      className="text-[#556cd6] text-sm font-medium no-underline">
                      {email}
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>

            <Section className="bg-[#f6f9fc] rounded-[3px] p-4 mb-5">
              <table width="100%" cellPadding="0" cellSpacing="0">
                <tr>
                  <td width="50%" style={{ paddingRight: "8px" }}>
                    <Text className="text-[#8898aa] text-xs uppercase tracking-wide font-semibold m-0 mb-1">
                      Phone Number
                    </Text>
                    <Link
                      href={`tel:${phone}`}
                      className="text-[#556cd6] text-sm font-medium no-underline">
                      {phone}
                    </Link>
                  </td>
                  <td width="50%" style={{ paddingLeft: "8px" }}>
                    <Text className="text-[#8898aa] text-xs uppercase tracking-wide font-semibold m-0 mb-1">
                      Submission Type
                    </Text>
                    <Text className="text-[#525f7f] text-sm font-medium m-0">
                      Contact Form
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Message */}
            <Text className="text-[#525f7f] text-sm uppercase tracking-wide font-semibold m-0 mt-6 mb-3">
              Message
            </Text>

            <Section className="bg-[#f6f9fc] rounded-[3px] p-4 mb-5">
              <Text className="text-[#525f7f] text-base leading-6 text-left whitespace-pre-wrap m-0">
                {message}
              </Text>
            </Section>

            {/* Call to Action */}
            <Button
              className="bg-blue-600 rounded-[3px] text-white text-[16px] font-bold no-underline text-center block p-[10px] my-5"
              href={`mailto:${email}?subject=Re:%20Your%20Inquiry%20to%20Takoradi%20Oil%20City%20Lions%20Club&body=Dear%20${firstName},%0D%0A%0D%0AThank%20you%20for%20contacting%20us.%0D%0A%0D%0A`}>
              Reply to {firstName}
            </Button>

            <Hr className="border-[#e6ebf1] my-5" />

            {/* Quick Actions */}
            <Text className="text-[#525f7f] text-sm leading-6 text-left">
              <strong>Quick Actions:</strong>{" "}
              <Link className="text-blue-500" href={`mailto:${email}`}>
                Send Email
              </Link>
              {" • "}
              <Link className="text-blue-500" href={`tel:${phone}`}>
                Call {firstName}
              </Link>
            </Text>

            <Text className="text-[#525f7f] text-base leading-6 text-left">
              Please respond to this inquiry within 24-48 business hours to
              ensure excellent customer service.
            </Text>

            <Text className="text-[#525f7f] text-base leading-6 text-left">
              — The Contact Form System
            </Text>

            <Hr className="border-[#e6ebf1] my-5" />

            <Text className="text-stone-400 text-center text-xs leading-4">
              Takoradi Oil City Lions Club | This is an automated notification
              from your contact form system.
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default AdminNotificationEmail;
