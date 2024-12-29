import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Logo from './components/Logo'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ww-blue via-ww-green to-ww-yellow animate-gradient-x p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white bg-opacity-90">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-3xl font-bold text-ww-blue">Privacy Policy</CardTitle>
            <Logo className="w-16 h-16" theme="light" />
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              WealthWise Academy ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by WealthWise Academy.
            </p>
            
            <h2 className="text-2xl font-bold mt-4">Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, subscribe to our service, or contact us for support. This may include:
            </p>
            <ul className="list-disc list-inside">
              <li>Name and contact information</li>
              <li>Payment information</li>
              <li>Account credentials</li>
              <li>Communication between you and WealthWise Academy</li>
              <li>Language preferences</li>
              <li>Learning progress and quiz scores</li>
            </ul>

            <h2 className="text-2xl font-bold mt-4">How We Use Your Information</h2>
            <p>
              We use your personal information to:
            </p>
            <ul className="list-disc list-inside">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Personalize and improve your experience</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            </ul>

            <h2 className="text-2xl font-bold mt-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information. These measures include encryption of data in transit and at rest, regular security audits, and strict access controls.
            </p>

            <h2 className="text-2xl font-bold mt-4">GDPR Compliance</h2>
            <p>
              For users in the European Union, we comply with GDPR requirements. You have the right to access, correct, delete, or export your personal data. To exercise these rights, please contact us at privacy@wealthwiseacademy.com.
            </p>

            <h2 className="text-2xl font-bold mt-4">PCI DSS Compliance</h2>
            <p>
              We adhere to the Payment Card Industry Data Security Standard (PCI DSS) when handling credit card information. We use trusted third-party payment processors that are PCI DSS compliant to ensure the security of your payment information.
            </p>

            <h2 className="text-2xl font-bold mt-4">International Data Transfers</h2>
            <p>
              Your information may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction. We ensure that adequate safeguards are in place to protect your data in compliance with applicable laws.
            </p>

            <h2 className="text-2xl font-bold mt-4">Children's Privacy</h2>
            <p>
              Our service is not directed to children under the age of 13. If you are under 13, please do not provide any personal information to us. If we become aware that we have collected personal information from a child under 13 without parental consent, we will take steps to remove that information from our servers.
            </p>

            <h2 className="text-2xl font-bold mt-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-bold mt-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              WealthWise Academy<br />
              privacy@wealthwiseacademy.com<br />
              123 Financial Street, Suite 456<br />
              Moneyville, CA 90210
            </p>

            <p className="mt-4">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </CardContent>
        </Card>
        <div className="mt-8 text-center">
          <Link href="/dashboard" className="text-white hover:text-ww-yellow">
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

