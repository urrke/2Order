using Microsoft.EntityFrameworkCore.Migrations;

namespace _2OrderLibrary.Migrations
{
    public partial class m2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Dostave_Korisnici_KorisnikId",
                table: "Dostave");

            migrationBuilder.AlterColumn<int>(
                name: "KorisnikId",
                table: "Dostave",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Dostave_Korisnici_KorisnikId",
                table: "Dostave",
                column: "KorisnikId",
                principalTable: "Korisnici",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Dostave_Korisnici_KorisnikId",
                table: "Dostave");

            migrationBuilder.AlterColumn<int>(
                name: "KorisnikId",
                table: "Dostave",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Dostave_Korisnici_KorisnikId",
                table: "Dostave",
                column: "KorisnikId",
                principalTable: "Korisnici",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
