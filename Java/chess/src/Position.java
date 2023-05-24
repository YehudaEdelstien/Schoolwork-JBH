public class Position {
    private int xPos, yPos;
    public Position(int x, int y) {
        try {
            setX(x);
            setY(y);
        } catch (InvalidRangeException exp) {
            xPos = 0; // reset x in case setting y threw the exception
            System.out.println("Initialization failed for a piece");
        }
    }

    public void setX (int pos) throws InvalidRangeException{
        if (pos < 0 || pos > 8) {
            throw new InvalidRangeException(pos);
        }
        xPos = pos;
    }

    public void setY(int pos) throws InvalidRangeException{
        if (pos < 0 || pos > 8) {
            throw new InvalidRangeException(pos);
        }
        yPos = pos;
    }


    public int getxPos() {
        return xPos;
    }

    public int getyPos() {
        return yPos;
    }

    public String toString() {
        return ("(" + xPos + "," + yPos + ")");
    }
}
