public abstract class ChessPiece {
    protected Position position;
    protected char color;

    public ChessPiece(Position position, char color) {
        this.position = position;
        this.color = color;
    }

    public void setPosition(int x, int y) {
        try {
            position.setX(x);
            position.setY(y);
        } catch (InvalidRangeException ignored) {}
    }

    public abstract Position[] moves();
    public abstract ChessPiece[] threatens(Chessboard board);
//    public ChessPiece[] threatenedBy(Chessboard board) {
//        return ChessPiece[];
//    }
}
