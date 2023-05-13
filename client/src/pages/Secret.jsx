import cat from '../assets/cat.gif'

const Secret = () => {
    return (
        <div className='secret-page'>
            <h1>You made it! 🎉</h1>
            <img src={cat} />
        </div>
    )
}

export default Secret