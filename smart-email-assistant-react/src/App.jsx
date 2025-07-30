import React, { useState } from 'react';
import axios from 'axios';
import {
  Typography,
  TextField,
  Button,
  CircularProgress,
  Box,
  MenuItem,
  Paper,
} from '@mui/material';

const tones = ['Formal', 'Informal', 'Professional', 'Friendly'];

const EmailGenerator = () => {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setGeneratedReply('');
    setError('');

    try {
      const response = await axios.post('http://localhost:8080/api/email/generate', {
        emailContent,
        tone,
      });

      setGeneratedReply(
        typeof response.data === 'string' ? response.data : JSON.stringify(response.data)
      );
    } catch (err) {
      setError('Failed to generate email reply. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#0d1117',
        p: 2,
      }}
    >
      <Box
        sx={{
          width: 400,
          backgroundColor: 'rgba(30, 41, 59, 0.9)',
          border: '1px solid #1e88e5',
          borderRadius: 4,
          boxShadow: '0 0 20px rgba(30, 136, 229, 0.4)',
          p: 4,
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#1e88e5' }}
        >
          🤖Smart Email Assistant
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: 2,
            mt: 2,
            backgroundColor: 'transparent',
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              label="Enter Email Content"
              multiline
              rows={5}
              fullWidth
              required
              InputLabelProps={{ style: { color: '#ddd' } }}
              InputProps={{
                style: { color: 'white' },
              }}
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#1e88e5' },
                  '&:hover fieldset': { borderColor: '#64b5f6' },
                },
              }}
            />

            <TextField
              select
              label="Select Tone"
              fullWidth
              required
              InputLabelProps={{ style: { color: '#ddd' } }}
              InputProps={{
                style: { color: 'white' },
              }}
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#1e88e5' },
                  '&:hover fieldset': { borderColor: '#64b5f6' },
                },
              }}
            >
              {tones.map((toneOption) => (
                <MenuItem key={toneOption} value={toneOption}>
                  {toneOption}
                </MenuItem>
              ))}
            </TextField>

            <Box display="flex" justifyContent="center" mb={3}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  px: 4,
                  py: 1,
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  borderRadius: 2,
                  backgroundColor: '#1e88e5',
                  '&:hover': { backgroundColor: '#1565c0' },
                }}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Generate Reply'}
              </Button>
            </Box>
          </form>

          {generatedReply && (
            <Box mt={3}>
              <Typography variant="h6" gutterBottom sx={{ color: '#1e88e5' }}>
                📝 Generated Reply:
              </Typography>
              <Paper
                elevation={2}
                sx={{
                  p: 2,
                  mt: 1,
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #333',
                  borderRadius: 2,
                  whiteSpace: 'pre-wrap',
                }}
              >
                <Typography variant="body1" sx={{ color: '#ddd' }}>
                  {generatedReply}
                </Typography>
                <Button
          variant='outlined'
          sx={{ mt: 2 }}
          onClick={() => navigator.clipboard.writeText(generatedReply)}>
            Copy to Clipboard
        </Button>
              </Paper>
            </Box>
          )}

          {error && (
            <Typography color="error" mt={2}>
              {error}
            </Typography>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default EmailGenerator;
