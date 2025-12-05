// Pages/Auth/Login.jsx
import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Building2, Mail, Lock, AlertCircle, Eye, EyeOff, ArrowRight, Sparkles } from 'lucide-react';
const customFontStyle = {
  fontFamily: "'Neue Montreal Regular', sans-serif",
  fontWeight: 600,
  fontStyle: "normal",
};


export default function Login() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  // Redirect if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      const result = await login(formData.email, formData.password);

      if (result.success) {
        navigate('/', { replace: true });
      } else {
        setError(result.error || 'Invalid credentials');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={customFontStyle} className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-white border-r border-gray-200 flex-col justify-between p-12">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 mb-16">
            <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-semibold text-gray-900">NextGen ERP</div>
              <div className="text-sm text-gray-500">Enterprise Solution</div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8 max-w-lg">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Modern Education Management Platform
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Streamline your institution's operations with our comprehensive ERP solution. 
                Manage students, courses, and faculty all in one place.
              </p>
            </div>

       
          </div>
        </div>

        {/* Footer */}
        <div className="text-sm text-gray-500">
          © 2025 NextGen ERP. All rights reserved.
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-semibold text-gray-900">NextGen ERP</div>
              <div className="text-sm text-gray-500">Enterprise Solution</div>
            </div>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">Welcome back</h1>
            <p className="text-gray-600">Sign in to your account to continue</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error Alert */}
            {error && (
              <div 
                className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300"
              >
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-900 mb-1">Authentication Error</p>
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="relative">
                <div className={`
                  absolute inset-0 rounded-xl border-2 transition-all duration-200 pointer-events-none
                  ${focusedField === 'email' ? 'border-gray-900' : 'border-transparent'}
                `} />
                <div className="relative">
                  <Mail className={`
                    absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-200
                    ${focusedField === 'email' ? 'text-gray-900' : 'text-gray-400'}
                  `} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    placeholder="admin@example.com"
                    className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-300 transition-colors"
                    disabled={loading}
                    autoComplete="email"
                  />
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <div className={`
                  absolute inset-0 rounded-xl border-2 transition-all duration-200 pointer-events-none
                  ${focusedField === 'password' ? 'border-gray-900' : 'border-transparent'}
                `} />
                <div className="relative">
                  <Lock className={`
                    absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-200
                    ${focusedField === 'password' ? 'text-gray-900' : 'text-gray-400'}
                  `} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-3.5 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-300 transition-colors"
                    disabled={loading}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    disabled={loading}
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-2 focus:ring-gray-900 focus:ring-offset-0 cursor-pointer"
                />
                <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                  Remember for 30 days
                </span>
              </label>
              <button
                type="button"
                className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full bg-gray-900 text-white py-3.5 rounded-xl font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus-2 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Sign in</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </form>


          {/* Footer Links */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button className="font-medium text-gray-900 hover:text-gray-700 transition-colors">
                Contact Administrator
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}