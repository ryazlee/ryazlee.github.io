import java.net.*;
import java.io.*;


public class lyricFileCreator{
    public static void main (String[] args){
        String baseSite = "https://genius.com/#FILLIN#-lyrics";
        String input = "taylor-swift-you-belong-with-me";

        String url = searchAndReplace("#FILLIN#", input, baseSite);
        System.out.println(url);        
        try{        
            URL site = new URL(url);        
            
            System.setProperty("http.agent", "Chrome"); 
            
            BufferedReader in = new BufferedReader(new InputStreamReader(site.openStream()));    

            String inputLine;
            while ((inputLine = in.readLine()) != null) System.out.println(inputLine);
            in.close();
        }catch (IOException e){
            System.out.println(e);
        }
    }

    public static String searchAndReplace(String searchParam, String replacedParam, String base) {
        String newText = base.replaceAll(searchParam, replacedParam);
        return newText;
    }
}
