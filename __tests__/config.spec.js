
function loadConfig(){
    const config = {
        "autoTeste": true,
        "intervalo": 6,
        "período": "horas",
        "quantidadeMedia": 30
    }

    return config
}

function setConfig(setObj) {
    return {"status": "ok"}
}

const valorObj = loadConfig()
const valorSetObj = setConfig(valorObj)

test('carrega os dados de configuração', () => {
    expect(valorObj).toHaveProperty('autoTeste')
    expect(valorObj).toHaveProperty('intervalo')
    expect(valorObj).toHaveProperty('período')
    expect(valorObj).toHaveProperty('quantidadeMedia')
})

test('intervalo será maior que 1', () => {
    expect(valorObj.intervalo).toBeGreaterThan(1)
})

test('quantidadeMedia será maior que 15', () => {
    expect(valorObj.quantidadeMedia).toBeGreaterThan(15)
})

test('retorna ok ao gravar dados do config no banco', () => {
    expect(valorSetObj).toMatchObject({"status": "ok"})
})


