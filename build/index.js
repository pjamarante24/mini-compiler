const codeEditorContainer = document.querySelector("#editor");
const tokensContainer = document.querySelector("#tokens");
const astContainer = document.querySelector("#ast");
const errorsContainer = document.querySelector("#errors");
const generatedCodeContainer = document.querySelector("#generated-code");
const symbolTableContainer = document.querySelector("#symbol-table > tbody");

function updateTable(tableData) {
  symbolTableContainer.innerHTML = "";

  tableData.forEach(function (rowData) {
    const row = document.createElement("tr");

    let cell = document.createElement("td");
    cell.appendChild(document.createTextNode(rowData.identifier));
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.appendChild(document.createTextNode(rowData.scope));
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.appendChild(document.createTextNode(rowData.kind));
    row.appendChild(cell);

    symbolTableContainer.appendChild(row);
  });
}

function updateList(listData) {
  errorsContainer.innerHTML = "";

  listData.forEach(function (error) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(error));
    errorsContainer.appendChild(li);
  });
}

const analyzeCode = (code) => {
  const tokens = esprima.tokenize(code);
  tokensContainer.value = JSON.stringify(tokens, null, 2);

  const tree = esprima.parseScript(code);
  astContainer.value = JSON.stringify(tree, null, 2);

  const semantic = new Semantic(tree);
  semantic.analyze(tree);
  updateList(semantic.errors);
  updateTable(semantic.symbolTable);

  const generatedCode = parse_lang("javascript", "java", code);
  generatedCodeContainer.value = generatedCode;
};

codeEditorContainer.addEventListener("keyup", () => {
  const code = codeEditorContainer.value;
  analyzeCode(code);
});

const defaultCode = `
var x = 10;
var y = 20;

var result = x * y;
`;

codeEditorContainer.value = defaultCode;
analyzeCode(defaultCode);
