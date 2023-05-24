public class Knight extends ChessPiece{
    public Knight(Position position, char color) {
        super(position, color);
    }

    @Override
    public Position[] moves() {

        return new Position[0];
    }

    @Override
    public ChessPiece[] threatens(Chessboard board) {
        return new ChessPiece[0];
    }
}
