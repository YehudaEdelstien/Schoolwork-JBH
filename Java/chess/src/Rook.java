public class Rook extends ChessPiece{

    public Rook(Position position, char color) {
        super(position, color);
    }

    // TODO need to upgrade to take chessboard as arg
    @Override
    public Position[] moves() {
        Position[] positions = new Position[14];

        // horizontal loop
        for (int i = 0; i < 8; i++) {
            if (i != position.getxPos()){
                positions[i] = new Position(position.getyPos(), i);
            }
        }

        // vertical loop
        for (int i = 13; i >= 8; i--) {
            if (i != position.getyPos()){
                positions[i] = new Position(i, position.getxPos());
            }
        }

        return positions;
    }

    @Override
    public ChessPiece[] threatens(Chessboard board) {
        return new ChessPiece[0];
    }
}
