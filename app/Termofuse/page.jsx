import React from "react";

const TermsOfUse =  () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Terms of Use
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
             ZeemLearn’s mission is to make learning convenient, flexible, and
            accessible. We create space for anyone anywhere to create and
            publish educational courses (instructors) and to enroll in these
            educational courses to learn (students). We consider our marketplace
            model the best way to offer valuable educational content to our
            users. We need rules to keep our platform and services safe for us,
            you, and our student and instructor community.
          </p>
          <p className="mb-4">
            These Terms apply to all your activities on the  ZeemLearn website
            (“Services”). If you publish a course on the  ZeemLearn platform,
            you must also agree to the Instructors Terms. We also provide
            details regarding our processing of personal data of our students
            and instructors in our Privacy Policy.
          </p>
          <p className="mb-4">
            If you live in Nigeria, by agreeing to these Terms, you agree to
            resolve disputes with  ZeemLearn through binding arbitration (with
            very limited exceptions, not in court), and you waive certain rights
            to participate in class actions, as detailed in the Dispute
            Resolution section.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Accounts</h2>
          <p className="mb-4">
            You need an account for most activities on our platform. Keep your
            password somewhere safe, because you’re responsible for all activity
            associated with your account. If you suspect someone else is using
            your account, let us know by contacting our Support Team. You must
            have reached the age of consent for online services in your country
            to use  ZeemLearn.
          </p>
          <p className="mb-4">
            You need an account for most activities on our platform, including
            to purchase and enroll in a course or to submit a course for
            publication. When setting up and maintaining your account, you must
            provide and continue to provide accurate and complete information,
            including a valid email address. You have complete responsibility
            for your account and everything that happens on your account,
            including for any harm or damage (to us or anyone else) caused by
            someone using your account without your permission. This means you
            need to be careful with your password. You may not transfer your
            account to someone else or use someone else’s account. If you
            contact us to request access to an account, we will not grant you
            such access unless you can provide us with the information that we
            need to prove you are the owner of that account. In the event of the
            death of a user, the account of that user will be closed.
          </p>
          <p className="mb-4">
            You may not share your account login credentials with anyone else.
            You are responsible for what happens with your account and
             ZeemLearn will not intervene in disputes between students or
            instructors who have shared account login credentials. You must
            notify us immediately upon learning that someone else may be using
            your account without your permission (or if you suspect any other
            breach of security) by contacting our Support Team. We may request
            some information from you to confirm that you are indeed the owner
            of your account.
          </p>
          <p className="mb-4">
            Students and instructors must be at least 18 years of age to create
            an account on  ZeemLearn and use the Services. If you are younger
            than 18 but above the required age for consent to use online
            services where you live (for example, 13 in the US or 16 in
            Ireland), you may not set up an account, but we encourage you to
            invite a parent or guardian to open an account and help you enroll
            in courses that are appropriate for you. If you are below this age
            of consent to use online services, you may not create a  ZeemLearn
            account. If we discover that you have created an account that
            violates these rules, we will terminate your account. Under our
            Instructors Terms, you may be requested to verify your identity
            before you are authorized to submit a course for publication on
             ZeemLearn.
          </p>
        </section>

        {/* Additional sections can be added here */}
      </div>
    </div>
  );
};

export default TermsOfUse;
