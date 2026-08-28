import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Store, User, Phone, MapPin, BarChart } from 'lucide-react';
import './DemoModal.css';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    pharmacyName: '',
    ownerName: '',
    phone: '',
    city: '',
    dailyVolume: '50-150 bills/day'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div className="modal-container medix-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Close button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <div className="modal-content">
            <div className="modal-header">
              <div className="eyebrow-pill">REQUEST A DEMO</div>
              <h3>See Medix in Action</h3>
              <p>Experience how Medix handles billing, batch expiry tracking, and inventory management for your pharmacy counter.</p>
            </div>

            <form onSubmit={handleSubmit} className="demo-form">
              <div className="form-group">
                <label><Store size={14} /> Pharmacy / Medical Store Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Apollo Chemists & Druggists"
                  value={formData.pharmacyName}
                  onChange={(e) => setFormData({ ...formData, pharmacyName: e.target.value })}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label><User size={14} /> Owner / Manager Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Rajesh Patel"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label><Phone size={14} /> Mobile Number (WhatsApp) *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label><MapPin size={14} /> City / Town *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Ahmedabad, Gujarat"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label><BarChart size={14} /> Daily Bills Volume</label>
                  <select 
                    value={formData.dailyVolume}
                    onChange={(e) => setFormData({ ...formData, dailyVolume: e.target.value })}
                  >
                    <option value="Under 50 bills/day">Under 50 bills/day</option>
                    <option value="50-150 bills/day">50–150 bills/day</option>
                    <option value="150-300 bills/day">150–300 bills/day</option>
                    <option value="300+ bills/day (Multi-counter)">300+ bills/day (Multi-counter)</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-lg submit-demo-btn">
                <span>Book Guided Demo</span>
                <ArrowRight size={18} />
              </button>

              <div className="form-security-note">
                <ShieldCheck size={14} />
                <span>Your contact details are strictly used for scheduling your live Medix demo.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="modal-success-content animate-fade-in">
            <div className="success-icon-wrap">
              <CheckCircle2 size={48} />
            </div>
            <h3>Demo Request Received!</h3>
            <p className="success-msg">
              Thank you, <strong>{formData.ownerName}</strong>! Our Medix pharmacy onboarding specialist will contact you on <strong>{formData.phone}</strong> within 2 business hours to schedule your demo for <strong>{formData.pharmacyName}</strong>.
            </p>
            <button onClick={handleReset} className="btn btn-primary btn-lg">
              Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
