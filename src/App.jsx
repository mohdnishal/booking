import './App.css'

const STEPS = [
  {
    title: 'Pick a doctor',
    text: 'Browse specialists by department and see who is available today.',
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20a7 7 0 0 1 14 0" />
      </>
    ),
  },
  {
    title: 'Choose a slot',
    text: 'Live availability for the next 14 days — no phone calls, no waiting.',
    icon: (
      <>
        <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
        <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      </>
    ),
  },
  {
    title: 'Confirm with OTP',
    text: 'Verify your mobile number and your appointment is booked instantly.',
    icon: (
      <>
        <path d="M12 3l7 3v6c0 4-3 7.5-7 9-4-1.5-7-5-7-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
]

const STATS = [
  { value: '200+', label: 'Doctors' },
  { value: '18', label: 'Departments' },
  { value: '60s', label: 'Average booking' },
  { value: '24/7', label: 'Online scheduling' },
]

function Icon({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

function BookButton({ variant = 'primary', size, children }) {
  return (
    <button
      type="button"
      className={`btn btn-${variant}${size === 'lg' ? ' btn-lg' : ''}`}
      data-appointment-booking
    >
      {children}
    </button>
  )
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true" />
          My Clinic
        </a>
        <nav className="site-nav">
          <a href="#how">How it works</a>
          <a href="#stats">Why us</a>
        </nav>
        <BookButton variant="ghost">Book now</BookButton>
      </header>

      <section id="top" className="hero">
        <span className="badge">
          <span className="pulse" aria-hidden="true" />
          Slots open today
        </span>

        <h1>Book Appointment</h1>
        <p className="lede">
          Find the right doctor, pick a time that suits you, and confirm in
          seconds — all from one screen.
        </p>

        <BookButton size="lg">
          <Icon>
            <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
            <path d="M3.5 9.5h17M8 3v4M16 3v4M12 13v4M10 15h4" />
          </Icon>
          Book an appointment
        </BookButton>

        <ul className="trust">
          <li>No account needed</li>
          <li>Instant confirmation</li>
          <li>Free rescheduling</li>
        </ul>
      </section>

      <section id="how" className="panel">
        <p className="eyebrow">How it works</p>
        <h2>Three steps, about a minute</h2>
        <ol className="steps">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <span className="step-icon">
                <Icon>{step.icon}</Icon>
              </span>
              <span className="step-no">Step {i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="stats" className="stats">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="cta">
        <h2>Ready when you are</h2>
        <p>Appointments for today and the next two weeks are open right now.</p>
        <BookButton size="lg">Book an appointment</BookButton>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} My Clinic</span>
        <span>Mon–Sat · 8:00 – 20:00</span>
      </footer>
    </>
  )
}

export default App
