require("dotenv").config();
const connStr = process.env.CONNECTION_STRING;
const sql = require("mssql");

async function createTable() {
  try {
    await sql.connect(connStr);
    console.log("Conectou!")

    const table = new sql.Table("Clientes");

    table.create = true;
    table.columns.add("ID", sql.Int, { nullable: false, primary: true });
    table.columns.add("Nome", sql.NVarChar(150), { nullable: false });
    table.columns.add("CPF", sql.NVarChar(11), { nullable: false });
    table.rows.add(1, "teste 1", "12345678901");
    table.rows.add(2, "teste 2", "09876543210");
    table.rows.add(3, "teste 3", "12312312399");
  } catch (error) {
    console.log(error);
  }
}

createTable();
