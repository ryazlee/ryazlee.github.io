import java.net.*;
import java.io.*;


public class lyricFileCreator{
    public static void main (String[] args){
        String baseSite = "https://www.azlyrics.com/lyrics/#FILLIN#.html";
        String input = "taylorswift/youbelongwithme";

        String url = searchAndReplace("#FILLIN#", input, baseSite);
        System.out.println(url);        
        
        String data = "";
        
        try{        
            URL site = new URL(url);        
            
            System.setProperty("http.agent", "Chrome"); 
            
            BufferedReader in = new BufferedReader(new InputStreamReader(site.openStream()));    

            String inputLine;
            while ((inputLine = in.readLine()) != null){
                if (inputLine.equals("      ")) data += "\n";
                else data += inputLine;
            }
            in.close();
        }catch (IOException e){
            System.out.println(e);
        }

            data = data.substring(data.indexOf("<!-- Usage of azlyrics.com content by any third-party lyrics provider is prohibited by our licensing agreement. Sorry about that. -->")+133, data.indexOf("<!-- MxM banner -->") - 14);
            System.out.println(data);
    }

    public static String searchAndReplace(String searchParam, String replacedParam, String base) {
        String newText = base.replaceAll(searchParam, replacedParam);
        return newText;
    }
}
