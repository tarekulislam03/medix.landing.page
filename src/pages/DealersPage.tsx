import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  GraduationCap,
  Clock,
  MapPin,
  CheckCircle2,
  Send,
  ChevronDown,
  ArrowRight,
  BadgeIndianRupee
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import { WhatsAppWidget } from '../components/WhatsAppWidget';
import './DealersPage.css';

interface Position {
  id: string;
  title: string;
  category: 'Job' | 'Internship';
  department: string;
  location: string;
  type: string;
  stipendOrSalary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const openPositions: Position[] = [
  {
    id: 'field-sales-intern',
    title: 'Field Sales Representative',
    category: 'Internship',
    department: 'Sales & Growth',
    location: 'On-Site (Field Visits)',
    type: '1-3 Months Internship',
    stipendOrSalary: '₹3,500 Stipend/month + ₹1,000/sale Incentives',
    description: 'Connect with local pharmacy owners and medical store retailers to demonstrate Medix software, onboard new clients, and gain hands-on field sales experience.',
    responsibilities: [
      'Conduct live software demonstrations for pharmacy owners and medical store retailers.',
      'Identify prospective pharmacy leads and schedule local field visits.',
      'Assist medical store owners with initial software onboarding and subscription setup.',
      'Track sales activities, maintain client relationship logs, and report weekly progress.'
    ],
    requirements: [
      'Strong communication and interpersonal skills in Hindi and local language.',
      'Enthusiasm for field sales, networking, and business development.',
      'Self-motivated, punctual, and eager to learn B2B SaaS sales.',
      'Two-wheeler vehicle for local pharmacy visits preferred.'
    ]
  }
];

export const DealersPage: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [expandedJobId, setExpandedJobId] = useState<string | null>('field-sales-intern');

  // Application Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    positionId: 'field-sales-intern',
    applicationType: 'Internship',
    qualification: '',
    resumeLink: '',
    coverNote: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPositions = openPositions;

  const handleApplyClick = (pos: Position) => {
    setFormData((prev) => ({
      ...prev,
      positionId: pos.id,
      applicationType: pos.category
    }));
    setExpandedJobId(pos.id);

    const formElement = document.getElementById('apply-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Replace with your Google Apps Script Web App URL or set VITE_GOOGLE_SHEETS_SCRIPT_URL in .env
  const GOOGLE_SHEETS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyMyh8ntlfdz3D0UWNHceBIlHZf3x0iki3fUStyl9E5vs3lbTjT5IKPyw_sfeD8xSikvQ/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      timestamp: new Date().toLocaleString('en-IN'),
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      qualification: formData.qualification,
      linkedinUrl: formData.resumeLink,
      coverNote: formData.coverNote,
      positionTitle: selectedPositionObj?.title || formData.positionId
    };

    try {
      if (GOOGLE_SHEETS_SCRIPT_URL) {
        await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      } else {
        console.log('Form submission payload:', payload);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }
  };

  const selectedPositionObj = openPositions.find((p) => p.id === formData.positionId);

  return (
    <div className="medix-app">
      <Navbar onOpenDemo={() => setIsDemoModalOpen(true)} />

      <main className="job-portal-main">

        {/* ───── Open Positions Section (About Job) ───── */}
        <section className="job-openings-section" id="openings">
          <div className="container">


            {/* Job Listings Cards */}
            <div className="job-listings-list">
              {filteredPositions.map((pos) => {
                const isExpanded = expandedJobId === pos.id;

                return (
                  <div className={`job-card ${isExpanded ? 'is-expanded' : ''}`} key={pos.id}>
                    <div className="job-card-header" onClick={() => setExpandedJobId(isExpanded ? null : pos.id)}>
                      <div className="job-title-meta">
                        <div className="job-badges">
                          <span className={`badge-type ${pos.category.toLowerCase()}`}>
                            {pos.category === 'Internship' ? <GraduationCap size={12} /> : <Briefcase size={12} />}
                            {pos.category}
                          </span>
                          <span className="badge-dept">{pos.department}</span>
                        </div>
                        <h3 className="job-card-title">{pos.title}</h3>
                        <div className="job-card-tags">
                          <span><MapPin size={14} /> {pos.location}</span>
                          <span><Clock size={14} /> {pos.type}</span>
                          <span className="tag-pay"><BadgeIndianRupee size={14} /> {pos.stipendOrSalary}</span>
                        </div>
                      </div>

                      <div className="job-card-header-action">
                        <button
                          type="button"
                          className="btn-toggle-details"
                          aria-expanded={isExpanded}
                        >
                          <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                          <ChevronDown size={18} className={`chevron-icon ${isExpanded ? 'open' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Collapsible Details */}
                    {isExpanded && (
                      <div className="job-card-body">
                        <p className="job-summary">{pos.description}</p>

                        <div className="job-details-grid">
                          <div className="details-col">
                            <h4>Key Responsibilities</h4>
                            <ul>
                              {pos.responsibilities.map((item, idx) => (
                                <li key={idx}>
                                  <CheckCircle2 size={16} className="bullet-check" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="details-col">
                            <h4>Requirements &amp; Skills</h4>
                            <ul>
                              {pos.requirements.map((item, idx) => (
                                <li key={idx}>
                                  <CheckCircle2 size={16} className="bullet-check" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="job-card-footer">
                          <button
                            type="button"
                            className="btn-apply-direct"
                            onClick={() => handleApplyClick(pos)}
                          >
                            Apply for {pos.title} <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───── Application Form Section (Form for Apply) ───── */}
        <section className="job-apply-section" id="apply-form-section">
          <div className="container">
            <div className="apply-wrapper">
              <div className="apply-header center">
                <span className="eyebrow-label">JOIN MEDIX TEAM</span>
                <h2>Submit Your Application</h2>
                <p>Fill out the application form below. Our HR team reviews every submission promptly.</p>
              </div>

              {formSubmitted ? (
                <div className="apply-success-card">
                  <div className="success-icon">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3>Application Submitted Successfully!</h3>
                  <p>
                    Thank you for applying for the <strong>{selectedPositionObj?.title || 'position'}</strong> position at Medix.
                    Our talent team will review your application and contact you via email or phone shortly.
                  </p>
                  <button
                    type="button"
                    className="btn-reset-form"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        positionId: 'field-sales-intern',
                        applicationType: 'Internship',
                        qualification: '',
                        resumeLink: '',
                        coverNote: ''
                      });
                    }}
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form className="apply-form" onSubmit={handleSubmit}>
                  <div className="form-grid">
                    {/* Position Selection */}
                    <div className="form-group full-width">
                      <label htmlFor="positionId">
                        Position Interested In <span className="req">*</span>
                      </label>
                      <select
                        id="positionId"
                        name="positionId"
                        value={formData.positionId}
                        onChange={(e) => {
                          handleInputChange(e);
                          const chosen = openPositions.find((p) => p.id === e.target.value);
                          if (chosen) {
                            setFormData((prev) => ({ ...prev, applicationType: chosen.category }));
                          }
                        }}
                        required
                      >
                        {openPositions.map((p) => (
                          <option key={p.id} value={p.id}>
                            [{p.category}] {p.title} ({p.department})
                          </option>
                        ))}
                      </select>
                    </div>



                    {/* Full Name */}
                    <div className="form-group">
                      <label htmlFor="fullName">
                        Full Name <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <label htmlFor="email">
                        Email Address <span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="e.g. rahul.sharma@gmail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                      <label htmlFor="phone">
                        Phone / WhatsApp Number <span className="req">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {/* Qualification / Status */}
                    <div className="form-group">
                      <label htmlFor="qualification">
                        Highest Qualification / Current Status <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="qualification"
                        name="qualification"
                        placeholder="e.g. B.Tech CS / BBA / Graduate"
                        value={formData.qualification}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {/* Resume Link */}
                    <div className="form-group full-width">
                      <label htmlFor="resumeLink">
                        LinkedIn URL <span className="req">*</span>
                      </label>
                      <input
                        type="url"
                        id="resumeLink"
                        name="resumeLink"
                        placeholder="LinkedIn link"
                        value={formData.resumeLink}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {/* Brief Cover Note */}
                    <div className="form-group full-width">
                      <label htmlFor="coverNote">Why do you want to join Medix? (Optional)</label>
                      <textarea
                        id="coverNote"
                        name="coverNote"
                        rows={4}
                        placeholder="Tell us briefly about your skills, interests, and why you are a good fit..."
                        value={formData.coverNote}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                  </div>

                  <div className="form-submit-container">
                    <button type="submit" className="btn-submit-app" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <Send size={18} /> Submit Application
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      <WhatsAppWidget />
    </div>
  );
};
