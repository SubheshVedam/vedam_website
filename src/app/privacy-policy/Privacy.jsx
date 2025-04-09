import { WidthContainer } from "@/components";
import { Box, Typography, Link as MuiLink } from "@mui/material";

export default function PrivacyPolicy() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F9F9F9",
        paddingTop: { xs: "0rem", md: "7rem" },
        paddingBottom: "3rem",
      }}
    >
      <WidthContainer>
        <Box
          sx={{
            backgroundColor: "#fff",
            boxShadow: 2,
            borderRadius: 2,
            padding: { xs: 3, md: 6 },
          }}
        >
          <Typography variant="h4" fontWeight={700} color="#FB7F05" mb={4}>
            Privacy Policy
          </Typography>

          <Box sx={{ color: "text.secondary", display: "flex", flexDirection: "column", gap: 4 }}>
            {/* Section I */}
            <Box component="section">
              <Typography paragraph>
                This policy applies only to information we collect through our Services, in email, text and other electronic communications sent through or in connection with our Services.
              </Typography>
              <Typography paragraph>
                We at SET Education Technology Private Limited (“SET Education Technology Private Limited,” the “Company,” “we,” “us,” and “our,”) firmly believe in the highest standards of integrity in relation to information provided by our customers when they use our services and otherwise.
              </Typography>
              <Typography paragraph>
                This policy describes the types of information that we may collect from you when you access or use our website or applications or any other online services (collectively, our “Services”); and our practices for collecting, using, maintaining, protecting and disclosing that information.
              </Typography>
              <Typography paragraph>
                Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our Services. By accessing or using our services, you agree to this privacy policy. This policy may change from time to time, your continued use of our services after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.
              </Typography>
            </Box>

            {/* Section II */}
            <Box component="section">
              <Typography variant="h5" fontWeight={600} color="secondary" mb={2}>
                I. The information we collect and how we use it
              </Typography>

              <Typography paragraph>
                We collect several types of information from and about users of our services, including:
              </Typography>

              <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem" }}>
                <li>Information by which you may be personally identified</li>
                <li>Information about your internet connection, the equipment you use to access our Services and your usage details</li>
              </ul>

              <Typography paragraph>
                We collect this information:
              </Typography>
              <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem" }}>
                <li>Directly from you when you provide it to us</li>
                <li>Automatically as you navigate through our Services</li>
              </ul>

              <Typography variant="h6" fontWeight={600} mt={2} mb={1}>
                Information You Provide to Us
              </Typography>
              <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem" }}>
                <li>Your account information: Full name, email, postal code, password, mobile number, etc.</li>
                <li>Your content: Batting parameters, motion sensor data, and profile details.</li>
              </ul>

              <Typography variant="h6" fontWeight={600} mt={2} mb={1}>
                Information We Collect Through Automatic Data Collection Technologies
              </Typography>
              <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem" }}>
                <li>Usage information: Traffic data, location, logs, resources accessed.</li>
                <li>Computer/device info: IP, OS, browser, network details, device identifiers.</li>
                <li>Your activity: Clicks, searches, time spent, page views, etc.</li>
              </ul>

              <Typography variant="h6" fontWeight={600} mt={2} mb={1}>
                Anonymous or De-Identified Data
              </Typography>
              <Typography>
                We may anonymize and/or de-identify information for analysis and improvements. Such data is not restricted by this policy and may be used or disclosed without limitation.
              </Typography>
            </Box>

            {/* Remaining sections follow similar format */}
            {[
              {
                title: "II. How we use the information we collect",
                content: [
                  "Respond to your queries",
                  "Improve content and features",
                  "Diagnose technical issues",
                  "Send relevant communication and offers",
                  "Show personalized ads",
                  "Fulfill contractual obligations and enforce rights",
                  "Notify you of updates",
                  "For other purposes with your consent",
                ],
              },
              {
                title: "III. How we share the information we collect",
                content: [
                  "With service providers under confidentiality agreements",
                  "As per the purpose you provided the data",
                  "To comply with legal processes or protect rights",
                  "With consent",
                ],
              },
              {
                title: "IV. Choices about how we use and disclose your information",
                text: "You can configure your browser or device to block cookies. We do not share your personal information with advertising agencies.",
              },
              {
                title: "V. Communications choices",
                text: "By signing up, you consent to receive emails from SET Education Technology Private Limited, its users, and businesses.",
              },
              {
                title: "VI. Reviewing, Changing or deleting information",
                text: "To review, change, or delete your data, please use the “Contact Us” option.",
              },
              {
                title: "VII. Accessing & correcting your personal information",
                text: "We encourage you to review and correct your personal data. Your rights may be limited by legal or practical factors (like abuse, safety, legal proceedings, or retention laws).",
              },
              {
                title: "VIII. Security: How we protect your information",
                text: (
                  <>
                    We use industry-standard measures to protect your data but cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials.
                    <br />
                    <MuiLink href="#" color="primary" underline="hover">Click here</MuiLink> to delete your account.
                  </>
                ),
              },
              {
                title: "IX. Third-party links and services",
                text: "We are not responsible for the privacy practices of third-party websites linked from our Services. Please read their policies separately.",
              },
              {
                title: "X. Changes to this privacy policy",
                text: "We may update this policy from time to time. Continued use of our Services constitutes your acceptance of these changes.",
              },
              {
                title: "XI. Contact us",
                text: (
                  <>
                    If you have queries about how your data is used, contact our Grievance Officer:
                    <br />
                    Email: <MuiLink href="mailto:connect@vedam.org" color="primary" underline="hover">connect@vedam.org</MuiLink>
                  </>
                ),
              },
            ].map((section, index) => (
              <Box key={index} component="section">
                <Typography variant="h5" fontWeight={600} color="secondary" mb={2}>
                  {section.title}
                </Typography>
                {section.content ? (
                  <ul style={{ paddingLeft: "1.25rem" }}>
                    {section.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <Typography>{section.text}</Typography>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </WidthContainer>
    </Box>
  );
}
