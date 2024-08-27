
// challenge บอกอายุ เป็น  _ปี _เดือน _วัน

function App() {
    const name = `Jirapat Thongbenjawat`
    const birthyear = 1999
    const birthDate = 4
    const birthMonth = 2
    const presentYear = (new Date().toDateString().split(' ')[3])
    const presentDate = (new Date().toDateString().split(' ')[2])
    const presentMonth = (new Date().getMonth())
    const style1 = {
        color: 'red',
        backgroundColor: 'lightblue',
        fontSize: `24px`
    }
    return (
        <div>
            <h1 style={{
                fontSize:'36px',
                color :'salmon'

            }}>{name}</h1>
            {/* <h1>{new Date().toDateString()}</h1> */}
            <p style={style1}>
                My age =
                day :    {presentDate - birthDate} /
                month :   {Math.abs(presentMonth - birthMonth)} /
                year :   {presentYear - birthyear}
            </p>
        </div>
    )
}



ReactDOM.createRoot(document.querySelector('#root')).render(<App />)