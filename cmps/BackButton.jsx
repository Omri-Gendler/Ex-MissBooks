
const { useNavigate } = ReactRouterDOM

export function BackButton() {

    const navigate = useNavigate()
    return (
        <div className="action-buttons-container">
            <button className="action-btn back-btn" onClick={() => navigate('/book')}>Back</button>
        </div>
    )
}
