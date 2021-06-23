using Microsoft.EntityFrameworkCore.Migrations;

namespace _2OrderLibrary.Migrations
{
    public partial class v3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Poruzbine_Korisnici_KorisnikId",
                table: "Poruzbine");

            migrationBuilder.DropForeignKey(
                name: "FK_Poruzbine_Racuni_RacunId",
                table: "Poruzbine");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Poruzbine",
                table: "Poruzbine");

            migrationBuilder.RenameTable(
                name: "Poruzbine",
                newName: "Porudzbine");

            migrationBuilder.RenameIndex(
                name: "IX_Poruzbine_RacunId",
                table: "Porudzbine",
                newName: "IX_Porudzbine_RacunId");

            migrationBuilder.RenameIndex(
                name: "IX_Poruzbine_KorisnikId",
                table: "Porudzbine",
                newName: "IX_Porudzbine_KorisnikId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Porudzbine",
                table: "Porudzbine",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Porudzbine_Korisnici_KorisnikId",
                table: "Porudzbine",
                column: "KorisnikId",
                principalTable: "Korisnici",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Porudzbine_Racuni_RacunId",
                table: "Porudzbine",
                column: "RacunId",
                principalTable: "Racuni",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Porudzbine_Korisnici_KorisnikId",
                table: "Porudzbine");

            migrationBuilder.DropForeignKey(
                name: "FK_Porudzbine_Racuni_RacunId",
                table: "Porudzbine");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Porudzbine",
                table: "Porudzbine");

            migrationBuilder.RenameTable(
                name: "Porudzbine",
                newName: "Poruzbine");

            migrationBuilder.RenameIndex(
                name: "IX_Porudzbine_RacunId",
                table: "Poruzbine",
                newName: "IX_Poruzbine_RacunId");

            migrationBuilder.RenameIndex(
                name: "IX_Porudzbine_KorisnikId",
                table: "Poruzbine",
                newName: "IX_Poruzbine_KorisnikId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Poruzbine",
                table: "Poruzbine",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Poruzbine_Korisnici_KorisnikId",
                table: "Poruzbine",
                column: "KorisnikId",
                principalTable: "Korisnici",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Poruzbine_Racuni_RacunId",
                table: "Poruzbine",
                column: "RacunId",
                principalTable: "Racuni",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
