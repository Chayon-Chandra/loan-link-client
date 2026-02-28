import { useEffect, useState } from "react";

const About = () => {
  // Counter States
  const [users, setUsers] = useState(0);
  const [loans, setLoans] = useState(0);
  const [rate, setRate] = useState(0);

  // Counter Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setUsers((prev) => (prev < 10000 ? prev + 200 : 10000));
      setLoans((prev) => (prev < 5000 ? prev + 100 : 5000));
      setRate((prev) => (prev < 99 ? prev + 1 : 99));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-100 text-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Our Loan Platform
          </h1>
          <p className="text-lg text-slate-800 max-w-2xl mx-auto">
            We provide fast, transparent, and secure microloan solutions to
            help individuals and small businesses grow financially.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4 text-slate-800">
              Our Mission
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Our mission is to make financial support accessible to everyone
              through simple, fast, and trustworthy loan services powered by
              modern technology.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4 text-slate-800">
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We envision a future where no one is limited by lack of financial
              access, empowering communities through responsible lending.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Why Choose Us
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border hover:border-red-500 hover:bg-red-50 hover:shadow-xl hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-2">Fast Approval</h4>
              <p className="text-slate-600">
                Get loan approval within minutes with a smooth digital process.
              </p>
            </div>

            <div className="p-6 rounded-xl border hover:border-red-500 hover:bg-red-50 hover:shadow-xl hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-2">Secure System</h4>
              <p className="text-slate-600">
                Your data and transactions are protected with modern security.
              </p>
            </div>

            <div className="p-6 rounded-xl border hover:border-red-500 hover:bg-red-50 hover:shadow-xl hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-2">
                Transparent Policy
              </h4>
              <p className="text-slate-600">
                No hidden charges — everything is clear and honest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div>
            <h3 className="text-3xl font-bold text-slate-800">
              {users.toLocaleString()}+
            </h3>
            <p className="text-slate-600">Happy Users</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-800">
              {loans.toLocaleString()}+
            </h3>
            <p className="text-slate-600">Loans Approved</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-800">
              {rate}%
            </h3>
            <p className="text-slate-600">Success Rate</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-800">
              24/7
            </h3>
            <p className="text-slate-600">Support</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-slate-800">
          Ready to Get Started?
        </h2>
        <p className="text-slate-600 mb-6">
          Apply for a loan today and take the next step toward financial
          growth.
        </p>
        <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Apply Now
        </button>
      </section>
    </div>
  );
};

export default About;