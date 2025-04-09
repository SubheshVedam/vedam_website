import { WidthContainer } from "@/components";
import { Box } from "@mui/material";

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
        <Box>
          <div className="bg-white shadow rounded-lg p-8">
            <h1 className="text-3xl font-bold text-primary mb-8">
              Privacy Policy
            </h1>

            <div className="space-y-6 text-gray-700">
              <section>
                <p>
                  This policy applies only to information we collect through our
                  Services, in email, text and other electronic communications
                  sent through or in connection with our Services.
                </p>
                <p>
                  We at SET Education Technology Private Limited (“SET Education
                  Technology Private Limited,” the “Company,” “we,” “us,” and
                  “our,”) firmly believe in the highest standards of integrity
                  in relation to information provided by our customers when they
                  use our services and otherwise.
                </p>
                <p>
                  This policy describes the types of information that we may
                  collect from you when you access or use our website or
                  applications or any other online services (collectively, our
                  “Services”); and our practices for collecting, using,
                  maintaining, protecting and disclosing that information.
                </p>
                <p>
                  Please read this policy carefully to understand our policies
                  and practices regarding your information and how we will treat
                  it. If you do not agree with our policies and practices, your
                  choice is not to use our Services. By accessing or using our
                  services, you agree to this privacy policy. This policy may
                  change from time to time, your continued use of our services
                  after we make changes is deemed to be acceptance of those
                  changes, so please check the policy periodically for updates.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  I. The information we collect and how we use it
                </h2>
                <p>We collect several types of information from and about users of our services, including:</p>
                <ul className="list-disc pl-6">
                  <li>Information by which you may be personally identified</li>
                  <li>Information about your internet connection, the equipment you use to access our Services and your usage details</li>
                </ul>
                <p className="mt-4">We collect this information:</p>
                <ul className="list-disc pl-6">
                  <li>Directly from you when you provide it to us</li>
                  <li>Automatically as you navigate through our Services</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4 mb-2">
                  Information You Provide to Us
                </h3>
                <ul className="list-disc pl-6">
                  <li>Your account information: Full name, email, postal code, password, mobile number, etc.</li>
                  <li>Your content: Batting parameters, motion sensor data, and profile details.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4 mb-2">
                  Information We Collect Through Automatic Data Collection Technologies
                </h3>
                <ul className="list-disc pl-6">
                  <li>Usage information: Traffic data, location, logs, resources accessed.</li>
                  <li>Computer/device info: IP, OS, browser, network details, device identifiers.</li>
                  <li>Your activity: Clicks, searches, time spent, page views, etc.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4 mb-2">
                  Anonymous or De-Identified Data
                </h3>
                <p>
                  We may anonymize and/or de-identify information for analysis and improvements. Such data is not restricted by this policy and may be used or disclosed without limitation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  II. How we use the information we collect
                </h2>
                <ul className="list-disc pl-6">
                  <li>Respond to your queries</li>
                  <li>Improve content and features</li>
                  <li>Diagnose technical issues</li>
                  <li>Send relevant communication and offers</li>
                  <li>Show personalized ads</li>
                  <li>Fulfill contractual obligations and enforce rights</li>
                  <li>Notify you of updates</li>
                  <li>For other purposes with your consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  III. How we share the information we collect
                </h2>
                <p>We may share information:</p>
                <ul className="list-disc pl-6">
                  <li>With service providers under confidentiality agreements</li>
                  <li>As per the purpose you provided the data</li>
                  <li>To comply with legal processes or protect rights</li>
                  <li>With consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  IV. Choices about how we use and disclose your information
                </h2>
                <p>
                  You can configure your browser or device to block cookies. We do not share your personal information with advertising agencies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  V. Communications choices
                </h2>
                <p>
                  By signing up, you consent to receive emails from SET Education Technology Private Limited, its users, and businesses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  VI. Reviewing, Changing or deleting information
                </h2>
                <p>
                  To review, change, or delete your data, please use the “Contact Us” option.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  VII. Accessing & correcting your personal information
                </h2>
                <p>
                  We encourage you to review and correct your personal data. Your rights may be limited by legal or practical factors (like abuse, safety, legal proceedings, or retention laws).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  VIII. Security: How we protect your information
                </h2>
                <p>
                  We use industry-standard measures to protect your data but cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials.
                </p>
                <p className="mt-2">
                  To delete your account, click <a href="#" className="text-blue-600 underline">here</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  IX. Third-party links and services
                </h2>
                <p>
                  We are not responsible for the privacy practices of third-party websites linked from our Services. Please read their policies separately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  X. Changes to this privacy policy
                </h2>
                <p>
                  We may update this policy from time to time. Continued use of our Services constitutes your acceptance of these changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  XI. Contact us
                </h2>
                <p>
                  If you have queries about how your data is used, contact our Grievance Officer:
                  <br />
                  Email: <a href="mailto:connect@vedam.org" className="text-blue-600 underline">connect@vedam.org</a>
                </p>
              </section>
            </div>
          </div>
        </Box>
      </WidthContainer>
    </Box>
  );
}
