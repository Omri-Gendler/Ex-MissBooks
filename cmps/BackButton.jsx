
const { useNavigate } = ReactRouterDOM

export function BackButton() {

    const navigate = useNavigate()
    return (
        <button onClick={() => navigate('/book')}>Back</button>
    )
}
