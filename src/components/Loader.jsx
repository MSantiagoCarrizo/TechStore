export const Loader = ({ text }) => {
    return (
        <div
            style={{
                width: '100%',
                minHeight: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1rem',
            }}
        >
            <div
                style={{
                    width: '50px',
                    height: '50px',
                    border: '4px solid rgba(255,255,255,.15)',
                    borderTop: '4px solid #00d4ff',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                }}
            />

            <span style={{
                color: '#e5e7eb',
            }}>{text || 'Cargando...'}</span>

            <style>
                {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
            </style>
        </div>
    )
}