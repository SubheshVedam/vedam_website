import { WidthContainer } from "@/components";
import { Box } from "@mui/material";

export default function TermsOfUse() {
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
              Terms of Use
            </h1>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  Your Acceptance
                </h2>
                <p className="text-gray-700">
                  By using and/or visiting the SET Education Technology Private
                  Limited Website you signify your agreement to:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                  <li>These terms and conditions (the "Terms of Use")</li>
                  <li>
                    The SET Education Technology Private Limited privacy policy
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  Website
                </h2>
                <p className="text-gray-700">
                  These Terms of Use apply to all users of the Website,
                  including users who are contributors of content and other
                  materials or services on the Website. The term Website shall
                  be understood to include all aspects and services of the SET
                  Education Technology Private Limited alumni Website, including
                  but not limited to all products, software and services offered
                  via any website such as the blogs, groups, clubs, directories,
                  discussion boards, job boards, mentor platforms, messaging,
                  social and professional networking, photo and video uploading,
                  commenting, mailing lists, and other applications.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  Rules for Online Conduct
                </h2>
                <p className="text-gray-700 mb-4">
                  You agree to use the Website in accordance with all applicable
                  laws. You agree that you will not use the Website for
                  organized partisan political activities or commercial
                  purposes.
                </p>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Prohibited conduct:
                </h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Posting content that defames or threatens others</li>
                  <li>
                    Posting statements that are bigoted, hateful or racially
                    offensive
                  </li>
                  <li>
                    Posting content that infringes another's intellectual
                    property
                  </li>
                  <li>
                    Posting material that contains obscene language or images
                  </li>
                  <li>Advertising or any form of commercial solicitation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  Disclaimer of Warranty / Limitation of Liability
                </h2>
                <p className="text-gray-700">
                  SET Education Technology Private Limited does not warrant that
                  the Website will operate in an uninterrupted or error-free
                  manner or that the Website is free of viruses or other harmful
                  components. Use of information obtained from or through these
                  websites is at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-700">
                  To ask questions or comment about this Terms of Use, contact
                  us at: connect@vedam.org
                </p>
              </section>
            </div>
          </div>
        </Box>
      </WidthContainer>
    </Box>
  );
}
