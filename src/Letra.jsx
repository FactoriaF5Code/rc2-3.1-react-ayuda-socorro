export const Letra = ({info}) =>
    <div className='letter-card'>
        {info.letra}
        <ul>{info.palabras[0]}</ul>
        <ul>{info.palabras[1]}</ul>
        <ul>{info.palabras[2]}</ul>
    </div>