import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function ApplicationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    goals: '',
    experience: '',
  });

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsSubmitted(false);
    };

    window.addEventListener('openApplication', handleOpen);
    return () => window.removeEventListener('openApplication', handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        goals: '',
        experience: '',
      });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-nwprt-navy/90 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-nwprt-off-white max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          {!isSubmitted ? (
            <div className="p-8 md:p-12">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 text-nwprt-navy/50 hover:text-nwprt-navy transition-colors"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>

              {/* Header */}
              <div className="mb-8">
                <h2 className="display text-3xl md:text-4xl text-nwprt-navy mb-4">Apply for NWPRT Ritual</h2>
                <div className="rule bg-nwprt-navy mb-4" />
                <p className="text-nwprt-navy/70 leading-relaxed">
                  We carefully curate each retreat to ensure an intimate, transformative experience.
                  Tell us a bit about yourself and what you're looking for.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="caption text-nwprt-navy/60 mb-2 block">First Name</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 border border-nwprt-navy/20 focus:border-nwprt-navy focus:outline-none bg-white"
                    />
                  </div>
                  <div>
                    <label className="caption text-nwprt-navy/60 mb-2 block">Last Name</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 border border-nwprt-navy/20 focus:border-nwprt-navy focus:outline-none bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="caption text-nwprt-navy/60 mb-2 block">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-nwprt-navy/20 focus:border-nwprt-navy focus:outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="caption text-nwprt-navy/60 mb-2 block">Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-nwprt-navy/20 focus:border-nwprt-navy focus:outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="caption text-nwprt-navy/60 mb-2 block">Location</label>
                  <input
                    type="text"
                    required
                    placeholder="City, State"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 border border-nwprt-navy/20 focus:border-nwprt-navy focus:outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="caption text-nwprt-navy/60 mb-2 block">What are you hoping to gain from this experience?</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    className="w-full px-4 py-3 border border-nwprt-navy/20 focus:border-nwprt-navy focus:outline-none bg-white resize-none"
                  />
                </div>

                <div>
                  <label className="caption text-nwprt-navy/60 mb-2 block">Have you attended similar retreats or wellness programs before?</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 border border-nwprt-navy/20 focus:border-nwprt-navy focus:outline-none bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-nwprt-yellow text-nwprt-navy caption px-8 py-4 tracking-[0.2em] hover:bg-nwprt-navy hover:text-nwprt-yellow transition-colors duration-300"
                >
                  Submit Application
                </button>
              </form>
            </div>
          ) : (
            <div className="p-8 md:p-12 text-center">
              {/* Success State */}
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-nwprt-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" className="text-nwprt-navy">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h2 className="display text-3xl md:text-4xl text-nwprt-navy mb-4">Application Received</h2>
                <div className="rule bg-nwprt-navy mx-auto mb-6" />

                <p className="text-nwprt-navy/70 leading-relaxed mb-8">
                  Thank you for your interest in NWPRT Ritual. We'll be in touch within the next 24-48 hours
                  to schedule a brief conversation and ensure this experience aligns with your goals.
                </p>

                <button
                  onClick={handleClose}
                  className="bg-nwprt-navy text-nwprt-cream caption px-8 py-4 tracking-[0.2em] hover:bg-nwprt-yellow hover:text-nwprt-navy transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
